const { Image, AutoLayout, Text } = figma.widget;

export const Time = ({ time }: { time: any }) => {
  const presentation = time.presentations[0];
  if (!presentation.presenters.length) {
    return null;
  }
  return (
    <AutoLayout direction="vertical" maxWidth={960} spacing={16}>
      <MyText>{presentation.category}</MyText>
      <AutoLayout spacing={16}>
        {presentation.presenters.map((presenter: any, i: number) => (
          <AutoLayout key={i} direction="vertical">
            <Image src={presenter.photo} width={80} height={80} />
            <MyText fontWeight={700}>{presenter.company_name}</MyText>
            <MyText>{presenter.post.replace(/<br\s*\/?>/g, "\n")}</MyText>
            <MyText fontWeight={700}>{presenter.name}</MyText>
          </AutoLayout>
        ))}
      </AutoLayout>
    </AutoLayout>
  )
}

const MyText = ({ fontSize = 16, fontWeight = 400, children }: { fontSize?: number; fontWeight?: WidgetJSX.FontWeight; children: string }) => (
  <Text fontFamily="Inter" fontSize={fontSize} fontWeight={fontWeight}>
    {children}
  </Text>
)
