import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Props = {};

const reviews = [
  {
    key: 0,
    rating: "4",
    fullName: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.",
  },
  {
    key: 1,
    rating: "5",
    fullName: "Jane Doe",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.",
  },
  {
    key: 2,
    rating: "3",
    fullName: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.",
  },
  {
    key: 3,
    rating: "4",
    fullName: "Jane Doe",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.",
  },
  {
    key: 4,
    rating: "5",
    fullName: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.",
  },
  {
    key: 5,
    rating: "3",
    fullName: "Jane Doe",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.",
  },
];

const Experiences = (props: Props) => {
  return (
    <div className="m-auto flex w-1/2 flex-col gap-10">
      <h1 className="text-3xl font-bold">Reviews</h1>
      {reviews.map((review) => (
        <Card key={review.key}>
          <CardHeader>
            <CardTitle>{review.fullName}</CardTitle>
            <CardDescription>Rating: {review.rating}/5</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{review.feedback}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Experiences;
