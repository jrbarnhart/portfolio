const Result = ({ sendSuccess }: { sendSuccess: boolean }) => {
  return (
    <div>
      {sendSuccess ? (
        <p className="md:text-xl font-bold">
          Message sent! Check your inbox for verification.
        </p>
      ) : (
        <p className="md:text-xl text-red-500 font-bold">
          Error: Message not sent. Please try again.
        </p>
      )}
    </div>
  );
};

export default Result;
