const Result = ({ sendSuccess }: { sendSuccess: boolean }) => {
  return (
    <div>
      <p>
        Result:{" "}
        {sendSuccess
          ? "Message sent!"
          : "Error. Message not sent. Please try again."}{" "}
      </p>
    </div>
  );
};

export default Result;
