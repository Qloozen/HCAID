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
    fullName: "Michael Davis",
    feedback:
      "Smart Lungs really helped me switch off normal smoking. By seeing the risk I was at for smoking normal cigarettes it helped me realise that smoking normal cigarettes was not worth it. I would recommend this to anyone who is trying to quit smoking who wants to quit, but is struggling to do so.",
  },
  {
    key: 1,
    rating: "5",
    fullName: "Jennifer Lee",
    feedback:
      "Smart Lungs truly turned my life around. I had been a long-time smoker, but this app detected a potential issue with my lung health. I heeded the app's timely alert, went for early screening, and to my shock, I was diagnosed with early-stage lung cancer. Thanks to Smart Lungs, I caught it early, received immediate treatment, and I'm now in full recovery. This app's early warning system saved my life, and I can't express how grateful I am for its role in my journey to better health.",
  },
  {
    key: 2,
    rating: "4",
    fullName: "William Parker",
    feedback:
      "Smart Lungs has been a game-changer in my life. As a long-time smoker, I knew I needed to make a change, but I wasn't sure where to start. This app provided me with all the information I needed about the risks associated with smoking and its connection to lung cancer. Armed with this knowledge from the app, I made a personal choice to switch from traditional cigarettes to e-cigarettes. It was a tough journey, but the app's information on the harmful effects of smoking played a pivotal role in my decision. I can't thank Smart Lungs enough for helping me make a healthier choice for my lungs.",
  },
  {
    key: 3,
    rating: "5",
    fullName: "Laura White",
    feedback:
      "Me and my friends have all used this app to switch off traditional cigarettes to e-cigarettes. The deals that Smart Lungs has with e-cigarette companies are amazing and have helped us to make the switch. I would recommend this app to anyone who is smoking traditional cigarettes and wants to improve their chance at reducing the risk of lung cancer.",
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
