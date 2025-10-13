const { Image, AutoLayout, Text } = figma.widget;

export const Time = ({ time }: { time: any }) => {
  const presentation = time.presentations[0];
  if (!presentation.category.match(/^.*(講演|基調|セッション).*$/)) {
    return null;
  }
  return (
    <AutoLayout direction="vertical" maxWidth={960} spacing={16}>
      <MyText>{presentation.category}</MyText>
      <AutoLayout spacing={16}>
        {presentation.presenters.map((presenter: any, i: number) => (
          <AutoLayout key={i} direction="vertical">
            <Image src={presenter.photo} width={80} height={80} />
            <MyText>{presenter.name}</MyText>
          </AutoLayout>
        ))}
      </AutoLayout>
    </AutoLayout>
  )
}

const MyText = ({ children }: { children: string }) => (
  <Text fontFamily="Inter" fontWeight={400}>{children}</Text>
);
