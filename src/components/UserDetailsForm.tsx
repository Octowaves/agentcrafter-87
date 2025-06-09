
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const userDetailsSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  country: z.string().min(1, { message: 'Please select your country' }),
  dateOfBirth: z.string().min(1, { message: 'Please enter your date of birth' }),
});

type UserDetailsFormValues = z.infer<typeof userDetailsSchema>;

interface UserDetailsFormProps {
  onComplete: (details: UserDetailsFormValues) => void;
}

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
  'India', 'Japan', 'Brazil', 'Mexico', 'Spain', 'Italy', 'Netherlands', 
  'Sweden', 'Norway', 'Denmark', 'Other'
];

const UserDetailsForm = ({ onComplete }: UserDetailsFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { user, updateProfile } = useAuth();
  const { toast } = useToast();

  const form = useForm<UserDetailsFormValues>({
    resolver: zodResolver(userDetailsSchema),
    defaultValues: {
      fullName: user?.user_metadata?.full_name || '',
      email: user?.email || '',
      country: '',
      dateOfBirth: '',
    },
  });

  const onSubmit = async (data: UserDetailsFormValues) => {
    setIsLoading(true);
    
    try {
      const { error } = await updateProfile({
        full_name: data.fullName,
        email: data.email,
        country: data.country,
        date_of_birth: data.dateOfBirth,
        details_completed_at: new Date().toISOString()
      });

      if (error) {
        toast({
          title: 'Error saving details',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        setCompleted(true);
        toast({
          title: 'Profile completed successfully',
          description: 'Welcome to Agentcrafter! You can now access the chat environment.',
        });
        
        setTimeout(() => {
          onComplete(data);
        }, 1500);
      }
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (completed) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Profile Completed!</h3>
        <p className="text-gray-600">Redirecting you to the chat environment...</p>
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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
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
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="you@example.com" 
                    type="email" 
                    {...field} 
                    disabled={true}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
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
            control={form.control}
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
                Saving details...
              </>
            ) : (
              'Complete Profile'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserDetailsForm;
