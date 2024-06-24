import { Icon, List } from "@raycast/api";
import { useCallback, useEffect, useState } from "react";
import { ColorListItem } from "./components/ColorListItem";
import { convertHexToRgb, convertHexToRgba } from "./utils/hex-to-rgb-converter";
import { validateHexColor } from "./utils/hex-validation";
import { parseInput } from "./utils/parse-input";

export default function Command() {
  const [hex, setHex] = useState<string>("");
  const [rgb, setRgb] = useState<string>("");
  const [rgba, setRgba] = useState<string>("");
  const [hexErrorMessage, setHexErrorMessage] = useState<string>("");

  const onHexInputChange = useCallback((value: string) => {
    const parsedValue = parseInput(value);

    if (!parsedValue) {
      setHex("");
      setHexErrorMessage("");
      return;
    }

    const validationResult = validateHexColor(parsedValue);

    if (validationResult) {
      setHex("");
      setHexErrorMessage(validationResult);
      return;
    }

    setHexErrorMessage("");
    setHex(parsedValue);
  }, []);

  useEffect(() => {
    if (!hex) {
      setRgb("");
      setRgba("");
      return;
    }

    setRgb(convertHexToRgb(hex));
    setRgba(convertHexToRgba(hex));
  }, [hex]);

  return (
    <List onSearchTextChange={onHexInputChange} searchBarPlaceholder="Enter a hex color">
      {hexErrorMessage && (
        <List.Section title="Errors">
          <List.Item title={hexErrorMessage} icon={Icon.Warning} />
        </List.Section>
      )}

      {rgb && (
        <List.Section title="Colors">
          {rgb && <ColorListItem color={rgb} />}
          {rgba && <ColorListItem color={rgba} />}
        </List.Section>
      )}
    </List>
  );
}
