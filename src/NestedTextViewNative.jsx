import { Text } from "react-native";
import { createElement } from "react";

export const NestedTextViewNative = ({ textItems }) => {
    const _renderTextItems = () =>
        textItems.map((item, index) => {
            const textStyle = {
                color: item.color,
                fontSize: item.fontSize,
                fontStyle: item.fontStyle,
                fontWeight: item.fontWeight.split("_").join(""),
                textTransform: item.textTransform
            };
            return (
                <Text key={`item-${index}`} style={textStyle}>
                    {item.text}
                </Text>
            );
        });
    return <Text>{_renderTextItems()}</Text>;
};
NestedTextViewNative.displayName = "NestedTextViewNative";
