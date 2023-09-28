import Text from "@/components/Text";

export default function TitleCard() {
  return (
    <div className="flex flex-col bg-purple rounded-[0.625rem] px-[2rem] pb-[2rem] pt-[3.875rem] grow basis-0">
      <Text as="H2" content="Frontend Mentor" />
      <Text as="Body 2" content="Feedback Board" />
    </div>
  );
}
