# customHooks

Project to create a Custom Hooks and Upload to NPM

- [x] useInput
- [x] useTabs
- [x] useTitle
- [x] useClick
- [x] useHover
- [x] useConfirm
- [x] usePreventLeave
- [x] useBeforeLeave
- [x] useFadeIn
- [x] useNetwork
- [x] useFullScreen
- [x] useNotification
- [x] useScroll
- [x] useAxios

Examples

````javascript
Use Tabs

import { useTabs } from "@websitehooks/use-tabs";

export default function App() {
  const contents = [
    { tabs: "Section 1", content: "This is section 1" },
    { tabs: "Section 2", content: "This is section 2" }
  ];
  const { currentItem, changeItem } = useTabs(0, contents);

  return (
    <div className="App">
      {contents.map((content, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {content.tabs}
        </button>
      ))}
      <h1>{currentItem.tabs}</h1>
    </div>
  );
}```
````
