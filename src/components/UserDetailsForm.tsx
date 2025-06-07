
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const userDetailsSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  country: z.string().min(1, { message: 'Please select your country' }),
  dateOfBirth: z.string().min(1, { message: 'Please enter your date of birth' }),
});

const otpSchema = z.object({
  otp: z.string().min(6, { message: 'Please enter the 6-digit code' }),
});

type UserDetailsFormValues = z.infer<typeof userDetailsSchema>;
type OTPFormValues = z.infer<typeof otpSchema>;

interface UserDetailsFormProps {
  onComplete: (details: UserDetailsFormValues) => void;
}

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
  'India', 'Japan', 'Brazil', 'Mexico', 'Spain', 'Italy', 'Netherlands', 
  'Sweden', 'Norway', 'Denmark', 'Other'
];

const UserDetailsForm = ({ onComplete }: UserDetailsFormProps) => {
  const [step, setStep] = useState<'details' | 'otp' | 'verified'>('details');
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetailsFormValues | null>(null);
  const { toast } = useToast();

  const detailsForm = useForm<UserDetailsFormValues>({
    resolver: zodResolver(userDetailsSchema),
    defaultValues: {
      fullName: '',
      email: '',
      country: '',
      dateOfBirth: '',
    },
  });

  const otpForm = useForm<OTPFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const onSubmitDetails = async (data: UserDetailsFormValues) => {
    setIsLoading(true);
    setUserDetails(data);
    
    // Simulate sending OTP
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      toast({
        title: 'Verification code sent',
        description: `Please check your email ${data.email} for the 6-digit code.`,
      });
    }, 2000);
  };

  const onSubmitOTP = async (data: OTPFormValues) => {
    setIsLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      if (data.otp === '123456' || data.otp.length === 6) { // Accept any 6-digit code for demo
        setStep('verified');
        toast({
          title: 'Email verified successfully',
          description: 'Welcome to Agentcrafter! You can now access the chat.',
        });
        setTimeout(() => {
          if (userDetails) {
            onComplete(userDetails);
          }
        }, 1500);
      } else {
        toast({
          title: 'Invalid code',
          description: 'Please enter the correct 6-digit code.',
          variant: 'destructive',
        });
      }
    }, 1000);
  };

  const resendOTP = () => {
    toast({
      title: 'Code resent',
      description: 'A new verification code has been sent to your email.',
    });
  };

  if (step === 'verified') {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Email Verified!</h3>
        <p className="text-gray-600">Redirecting you to the chat environment...</p>
      </div>
    );
  }

  if (step === 'otp') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">Verify Your Email</h3>
          <p className="text-gray-600">
            We sent a 6-digit code to <strong>{userDetails?.email}</strong>
          </p>
        </div>

        <Form {...otpForm}>
          <form onSubmit={otpForm.handleSubmit(onSubmitOTP)} className="space-y-6">
            <FormField
              control={otpForm.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="text-center">
                  <FormLabel>Enter verification code</FormLabel>
                  <FormControl>
                    <div className="flex justify-center">
                      <InputOTP 
                        maxLength={6} 
                        value={field.value} 
                        onChange={field.onChange}
                        disabled={isLoading}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify Email'
              )}
            </Button>
          </form>
        </Form>

        <div className="text-center">
          <button 
            onClick={resendOTP}
            className="text-prompter-600 hover:underline text-sm"
            type="button"
          >
            Didn't receive the code? Resend
          </button>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setStep('details')}
            className="text-gray-500 hover:underline text-sm"
            type="button"
          >
            ← Back to details
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Complete Your Profile</h3>
        <p className="text-gray-600">
          We need a few details to unlock the chat environment
        </p>
      </div>

      <Form {...detailsForm}>
        <form onSubmit={detailsForm.handleSubmit(onSubmitDetails)} className="space-y-6">
          <FormField
            control={detailsForm.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={detailsForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" type="email" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={detailsForm.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country of Residence</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={detailsForm.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending verification code...
              </>
            ) : (
              'Continue'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserDetailsForm;
