"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Props = {};

const Experiences = (props: Props) => {
  const feedback_raw = localStorage.getItem("feedbacks");
  const feedback: {
    key: string;
    feedback: string;
    rating: string;
    fullName: string | undefined;
  }[] = feedback_raw ? JSON.parse(feedback_raw) : [];

  return (
    <div className="m-auto flex w-1/2 flex-col gap-10">
      <h1 className="text-3xl font-bold">Reviews</h1>
      {feedback.length < 1 && <p>No reviews yet</p>}
      {feedback.map((feedback) => (
        <Card key={feedback.key}>
          <CardHeader>
            <CardTitle>
              {feedback.fullName || feedback.feedback.trim().length < 1
                ? feedback.fullName
                : "Anonymous"}
            </CardTitle>
            <CardDescription>Rating: {feedback.rating}/5</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{feedback.feedback}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Experiences;
