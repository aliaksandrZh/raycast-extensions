import { Action, ActionPanel, Icon, List } from "@raycast/api";

export const ColorListItem = ({ color }: { color: string }) => (
  <List.Item
    title={color}
    icon={{
      source: Icon.CircleFilled,
      tintColor: color,
    }}
    actions={
      <ActionPanel>
        <Action.CopyToClipboard title="Copy" content={color} />
      </ActionPanel>
    }
  />
);
