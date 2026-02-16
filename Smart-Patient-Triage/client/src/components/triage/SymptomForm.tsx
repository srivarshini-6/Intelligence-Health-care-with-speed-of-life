import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Activity, Mic, Upload, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2),
  age: z.string().min(1),
  gender: z.string(),
  blood: z.string(),
  symptoms: z.string().min(5),
  painLevel: z.string(),
});

export function SymptomForm({ onComplete }: { onComplete: () => void }) {

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      blood: "",
      symptoms: "",
      painLevel: "1",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "AI triage completed",
      });
      onComplete();
    }, 2000);
  }

  const startVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      form.setValue("symptoms", transcript);
    };

    recognition.start();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-primary/10">

      <CardHeader className="bg-primary/5 border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Activity className="h-5 w-5" />
          AI Symptom Checker
        </CardTitle>
        <CardDescription>
          Enter your symptoms below for instant AI triage.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* NAME */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* AGE + GENDER */}
            <div className="grid md:grid-cols-2 gap-4">

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter age" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <select {...field} className="w-full border rounded-md px-3 py-2">
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* BLOOD GROUP */}
            <FormField
              control={form.control}
              name="blood"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood Group</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full border rounded-md px-3 py-2">
                      <option value="">Select Blood Group</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* PAIN INTENSITY */}
            <FormField
              control={form.control}
              name="painLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pain Intensity</FormLabel>

                  <div className="flex gap-3">
                    {[1,2,3,4,5].map((level)=>(
                      <button
                        type="button"
                        key={level}
                        onClick={()=>form.setValue("painLevel", String(level))}
                        className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all
                        ${
                          field.value === String(level)
                            ? "bg-primary text-white"
                            : "hover:bg-primary/10"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </FormItem>
              )}
            />

            {/* SYMPTOMS */}
            <FormField
              control={form.control}
              name="symptoms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Describe your Symptoms</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <textarea
                        {...field}
                        placeholder="Describe symptoms..."
                        className="w-full border rounded-md p-3"
                      />

                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="absolute right-2 top-2"
                        onClick={startVoiceInput}
                      >
                        <Mic className="h-4 w-4" />
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* UPLOAD */}
            <div className="bg-muted/30 p-4 rounded-lg border border-dashed flex flex-col items-center gap-2">
              <Upload className="h-8 w-8 text-primary/50" />
              <p className="text-sm">Upload Medical Reports (PDF, JPG)</p>
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
