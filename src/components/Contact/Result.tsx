const Result = ({ sendSuccess }: { sendSuccess: boolean }) => {
  return (
    <div>
      {sendSuccess ? (
        <p className="md:text-xl text-center font-bold">
          Message sent! Check inbox for confirmation.
        </p>
      ) : (
        <p className="md:text-xl text-red-500 text-center font-bold">
          Error: Message not sent. Please try again.
        </p>
      )}
    </div>
  );
};

export default Result;
