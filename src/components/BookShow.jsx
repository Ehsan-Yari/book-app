import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BookShow = ({ book }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{book?.title}</CardTitle>
        <CardDescription>
          <img
            className="rounded-lg mt-4 mx-auto min-w-[200px] min-h-[200px]"
            src={`https://picsum.photos/id/${book?.id}/200/200`}
            alt="bookname"
          />
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BookShow;
