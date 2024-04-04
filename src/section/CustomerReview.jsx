import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section>
      <h3 className="font-palanquin text-4xl text-center font-bold">
        What Our
        <span className="text-coral-red "> Customer </span>
        Say?
      </h3>
      <p className="info-text text-center m-auto mt-4 max-w-lg">
        &Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        ducimus libero harum animi modi illo inventore? Mollitia numquam
        laboriosam excepturi maiores aperiam. Expedita, maiores in! Accusamus
        consectetur eligendi reprehenderit placeat.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
