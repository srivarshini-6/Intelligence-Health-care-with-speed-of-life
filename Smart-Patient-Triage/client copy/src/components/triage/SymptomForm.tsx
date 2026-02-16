import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Loader2, Mic, Upload, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, "Age is required"),
  gender: z.string(),
  symptoms: z.string().min(10, "Please describe your symptoms in detail"),
  painLevel: z.string(),
  duration: z.string(),
});

export function SymptomForm({ onComplete }: { onComplete: () => void }) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      symptoms: "",
      painLevel: "1",
      duration: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Your symptoms have been processed by the AI Triage System.",
      });
      onComplete();
    }, 2000);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-primary/10">
      <CardHeader className="bg-primary/5 border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Activity className="h-5 w-5" />
          AI Symptom Checker
        </CardTitle>
        <CardDescription>
          Enter your symptoms below for instant AI triage and risk assessment.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="35" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="symptoms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Describe your Symptoms</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea 
                        placeholder="e.g. Sharp chest pain on left side, difficulty breathing, sweating..." 
                        className="min-h-[100px] pr-10"
                        {...field} 
                      />
                      <Button 
                        type="button"
                        size="icon" 
                        variant="ghost" 
                        className="absolute right-2 top-2 text-muted-foreground hover:text-primary"
                        onClick={() => toast({ title: "Voice Input", description: "Listening for symptoms..." })}
                      >
                        <Mic className="h-4 w-4" />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="painLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pain Intensity (1-10)</FormLabel>
                    <FormControl>
                      <div className="pt-2">
                         {/* Simple slider replacement with radio group for robustness in mockup */}
                         <RadioGroup 
                           onValueChange={field.onChange} 
                           defaultValue={field.value}
                           className="flex justify-between"
                         >
                            {[1, 3, 5, 7, 9].map((val) => (
                              <FormItem key={val} className="flex flex-col items-center space-y-1">
                                <FormControl>
                                  <RadioGroupItem value={val.toString()} />
                                </FormControl>
                                <span className="text-xs text-muted-foreground">{val}</span>
                              </FormItem>
                            ))}
                         </RadioGroup>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="How long?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="just_started">Just started</SelectItem>
                        <SelectItem value="few_hours">A few hours</SelectItem>
                        <SelectItem value="few_days">A few days</SelectItem>
                        <SelectItem value="week_plus">More than a week</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="bg-muted/30 p-4 rounded-lg border border-dashed border-primary/20 flex flex-col items-center justify-center text-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
              <Upload className="h-8 w-8 text-primary/50" />
              <p className="text-sm font-medium text-muted-foreground">
                Upload Medical Reports (PDF, JPG)
              </p>
              <p className="text-xs text-muted-foreground/60">
                AI will extract relevant data automatically
              </p>
            </div>

            <Button type="submit" className="w-full h-12 text-lg" disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing Symptoms...
                </>
              ) : (
                "Analyze Risk & Get Recommendation"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
