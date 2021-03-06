import React, { useState } from "react";
import styled from "styled-components";

import { getChildren } from "@/components/FileTree/utils";
import IconProvider from "@/components/IconProvider";
import LanguageProvider from "@/components/LanguageProvider";
import ProjectSection from "@/components/Project/ProjectSection";
import { FileItem, Item } from "@/types";
import Monaka from ".";

const Container = styled.div`
  height: 550px;
`;

const SourceDirectoryClosed: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <title>folder_type_src</title>
      <path d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z" fill="#14622a" />
      <path
        d="M19.146,30.989a.9.9,0,0,1-.207-.025,1.041,1.041,0,0,1-.726-1.213L20.922,15.32a1.037,1.037,0,0,1,.444-.683.894.894,0,0,1,.7-.122,1.043,1.043,0,0,1,.727,1.213L20.077,30.16a1.033,1.033,0,0,1-.442.681A.9.9,0,0,1,19.146,30.989Z"
        fill="#06cc14"
      />
      <path
        d="M24.578,28.944l-.068,0a.931.931,0,0,1-.668-.377,1.1,1.1,0,0,1,.1-1.419L28.6,22.595l-4.638-4.239a1.1,1.1,0,0,1-.141-1.416.937.937,0,0,1,.661-.4.9.9,0,0,1,.709.237l5.47,5a1.1,1.1,0,0,1,.144,1.416,1.061,1.061,0,0,1-.142.163L25.216,28.68A.916.916,0,0,1,24.578,28.944Z"
        fill="#06cc14"
      />
      <path
        d="M16.423,28.947a.914.914,0,0,1-.639-.267l-5.452-5.327A.9.9,0,0,1,10.2,23.2a1.094,1.094,0,0,1,.141-1.414l5.471-5a.881.881,0,0,1,.7-.238.941.941,0,0,1,.665.4,1.1,1.1,0,0,1-.14,1.417L12.4,22.6l4.659,4.551a1.093,1.093,0,0,1,.1,1.419.927.927,0,0,1-.669.377Z"
        fill="#06cc14"
      />
    </svg>
  );
};

const SourceDirectoryOpened: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <title>folder_type_src_opened</title>
      <path d="M27.4,5.5H18.2L16.1,9.7H4.3V26.5H29.5V5.5Zm0,18.7H6.6V11.8H27.4Zm0-14.5H19.2l1-2.1h7.1V9.7Z" fill="#2a8243" />
      <polygon points="25.7 13.7 0.5 13.7 4.3 26.5 29.5 26.5 25.7 13.7" fill="#2a8243" />
      <path
        d="M19.146,30.989a.9.9,0,0,1-.207-.025,1.041,1.041,0,0,1-.726-1.213L20.922,15.32a1.037,1.037,0,0,1,.444-.683.894.894,0,0,1,.7-.122,1.043,1.043,0,0,1,.727,1.213L20.077,30.16a1.033,1.033,0,0,1-.442.681A.9.9,0,0,1,19.146,30.989Z"
        fill="#06cc14"
      />
      <path
        d="M24.578,28.944l-.068,0a.931.931,0,0,1-.668-.377,1.1,1.1,0,0,1,.1-1.419L28.6,22.595l-4.638-4.239a1.1,1.1,0,0,1-.141-1.416.937.937,0,0,1,.661-.4.9.9,0,0,1,.709.237l5.47,5a1.1,1.1,0,0,1,.144,1.416,1.061,1.061,0,0,1-.142.163L25.216,28.68A.916.916,0,0,1,24.578,28.944Z"
        fill="#06cc14"
      />
      <path
        d="M16.423,28.947a.914.914,0,0,1-.639-.267l-5.452-5.327A.9.9,0,0,1,10.2,23.2a1.094,1.094,0,0,1,.141-1.414l5.471-5a.881.881,0,0,1,.7-.238.941.941,0,0,1,.665.4,1.1,1.1,0,0,1-.14,1.417L12.4,22.6l4.659,4.551a1.093,1.093,0,0,1,.1,1.419.927.927,0,0,1-.669.377Z"
        fill="#06cc14"
      />
    </svg>
  );
};

const StoryBook: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <title>file_type_storybook</title>
      <path
        d="M20.735,5.442l.133-3.173,2.72-.168.122,3.23a.216.216,0,0,1-.047.143.21.21,0,0,1-.3.029l-1.05-.82-1.243.934a.212.212,0,0,1-.3-.04A.206.206,0,0,1,20.735,5.442Z"
        fill="#fff"
      />
      <path
        d="M20.868,2.268l-.133,3.174a.206.206,0,0,0,.043.135.212.212,0,0,0,.3.04l1.243-.934,1.05.82a.21.21,0,0,0,.3-.029.216.216,0,0,0,.047-.143L23.588,2.1,25.154,2A1.415,1.415,0,0,1,26.66,3.321q0,.043,0,.087V28.592A1.414,1.414,0,0,1,25.245,30l-.066,0L6.231,29.156A1.414,1.414,0,0,1,4.876,27.8L4,4.69A1.412,1.412,0,0,1,5.33,3.232l15.537-.963Z"
        fill="#ff4785"
      />
      <path
        d="M17.253,12.554c0,.547,3.72.285,4.22-.1,0-3.73-2.018-5.69-5.714-5.69S9.993,8.754,9.993,11.74c0,5.2,7.077,5.3,7.077,8.136a1.127,1.127,0,0,1-1.258,1.27c-1.127,0-1.573-.572-1.52-2.512,0-.421-4.3-.553-4.43,0-.334,4.7,2.621,6.06,6,6.06,3.276,0,5.845-1.733,5.845-4.868,0-5.573-7.182-5.423-7.182-8.185a1.18,1.18,0,0,1,1.337-1.269C16.388,10.372,17.332,10.464,17.253,12.554Z"
        fill="#fff"
      />
    </svg>
  );
};

const TsConfigJson: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <title>file_type_tsconfig</title>
      <path
        d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.1,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761l1.024-.6.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.4-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755a13.986,13.986,0,0,1,.04-1.466c.017-.023,2.832-.034,6.245-.028l6.211.017Z"
        fill="#007acc"
      />
      <path
        d="M27.075,25.107l.363-.361c1.68.055,1.706,0,1.78-.177l.462-1.124.034-.107-.038-.093c-.02-.049-.081-.2-1.13-1.2v-.526c1.211-1.166,1.185-1.226,1.116-1.4l-.46-1.136c-.069-.17-.1-.237-1.763-.191l-.364-.367a8.138,8.138,0,0,0-.057-1.657l-.047-.106-1.2-.525c-.177-.081-.239-.11-1.372,1.124l-.509-.008c-1.167-1.245-1.222-1.223-1.4-1.152l-1.115.452c-.175.071-.236.1-.169,1.79l-.36.359c-1.68-.055-1.7,0-1.778.177L18.606,20l-.036.108.038.094c.02.048.078.194,1.13,1.2v.525c-1.211,1.166-1.184,1.226-1.115,1.4l.459,1.137c.07.174.1.236,1.763.192l.363.377a8.169,8.169,0,0,0,.055,1.654l.047.107,1.208.528c.176.073.236.1,1.366-1.13l.509.006c1.168,1.247,1.228,1.223,1.4,1.154l1.113-.45C27.082,26.827,27.143,26.8,27.075,25.107Zm-4.788-2.632a2,2,0,1,1,2.618,1.14A2.023,2.023,0,0,1,22.287,22.475Z"
        fill="#99b8c4"
      />
    </svg>
  );
};

const TypeScript: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <title>file_type_typescript</title>
      <path
        d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"
        fill="#007acc"
      />
    </svg>
  );
};

const TypeScriptReact: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <title>file_type_reactts</title>
      <circle cx="16" cy="15.974" r="2.5" fill="#007acc" />
      <path
        d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z"
        fill="#007acc"
      />
      <path
        d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z"
        fill="#007acc"
      />
      <path
        d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z"
        fill="#007acc"
      />
    </svg>
  );
};

const MonakaProject = {
  projectTitle: "Monaka",
  items: [
    {
      type: "file",
      id: "291c90ee-76d4-4ae0-8689-0cad11df7a48",
      title: "some-component.stories.tsx",
      content: "",
      parentId: "56500707-f157-4c6c-9e94-7c0baec4bc85",
    },
    {
      type: "file",
      id: "a974ae0d-0016-4bc5-81ad-b077f2be533e",
      title: "some-component.tsx",
      content: "",
      parentId: "56500707-f157-4c6c-9e94-7c0baec4bc85",
    },
    {
      type: "directory",
      id: "56500707-f157-4c6c-9e94-7c0baec4bc85",
      title: "components",
      parentId: "df415ce9-eafa-4841-bf76-6329a2f576ce",
      state: "closed",
    },
    {
      type: "file",
      id: "0cf5ed9d-89b9-4162-be03-2124a7e33ebe",
      title: "tsconfig.json",
      content: "",
      parentId: null,
    },
    {
      type: "file",
      id: "5148c791-57af-4cb3-9861-5e763ff5a36b",
      title: "main.tsx",
      content: "",
      parentId: "df415ce9-eafa-4841-bf76-6329a2f576ce",
    },
    {
      type: "file",
      id: "ab9455ce-0b45-47f3-bd79-c332810b9d2e",
      title: "more-component.tsx",
      content: "",
      parentId: "56500707-f157-4c6c-9e94-7c0baec4bc85",
    },
    {
      type: "directory",
      id: "df415ce9-eafa-4841-bf76-6329a2f576ce",
      title: "src",
      parentId: null,
      state: "closed",
    },
  ] as Item[],
};

const icons = [
  {
    directory: true,
    extension: /^(src|Source)_opened$/,
    component: SourceDirectoryOpened,
  },
  {
    directory: true,
    extension: /^(src|Source)_closed$/,
    component: SourceDirectoryClosed,
  },
  {
    directory: false,
    extension: /^tsconfig\.json$/,
    component: TsConfigJson,
  },
  {
    directory: false,
    extension: /\.stories\.tsx?$/,
    component: StoryBook,
  },
  {
    directory: false,
    extension: /\.ts$/,
    component: TypeScript,
  },
  {
    directory: false,
    extension: /\.tsx$/,
    component: TypeScriptReact,
  },
];

const languages = [
  {
    extension: /\.tsx?$/,
    language: "typescript",
  },
  {
    extension: /\.json$/,
    language: "json",
  },
];

export default {
  title: "components/Monaka",
};

export const Default = () => {
  const [state, setState] = useState(MonakaProject.items);

  const onItemsChanged = (changesets: Item[]) => {
    const items = state.slice();

    for (let i = 0; i < changesets.length; i += 1) {
      const item = changesets[i];
      const index = items.findIndex((w) => w.id === item.id);
      items[index].title = item.title;
      items[index].parentId = item.parentId;

      if (item.type === "file") (items[index] as FileItem).content = item.content;
    }

    setState(items);
  };

  const onItemCreated = (item: Item) => {
    setState([...state, item]);
  };

  const onItemDeleted = (item: Item) => {
    let items: Item[] = [];
    if (item.type === "file") {
      items = state.slice().filter((w) => w.id !== item.id);
    } else if (item.type === "directory") {
      items = state.slice().filter((w) => !getChildren(state, item).find((v) => v.id === w.id));
    }
    setState(items);
  };

  return (
    <LanguageProvider languages={languages}>
      <IconProvider icons={icons}>
        <Container>
          <Monaka items={state} title="Monaka Sample Project" onItemsChanged={onItemsChanged} onItemCreated={onItemCreated} onItemDeleted={onItemDeleted}>
            <ProjectSection title="Outline" />
            <ProjectSection title="NPM Scripts" />
            <ProjectSection title="Bazel Build Targets" />
          </Monaka>
        </Container>
      </IconProvider>
    </LanguageProvider>
  );
};

export const Readonly = () => {
  const [state] = useState(MonakaProject.items);

  const onItemsChanged = (_changesets: Item[]) => {
    // never called
  };

  const onItemCreated = (_item: Item) => {
    // never called
  };

  const onItemDeleted = (_item: Item) => {
    // never called
  };

  return (
    <LanguageProvider languages={languages}>
      <IconProvider icons={icons}>
        <Container>
          <Monaka items={state} title="Monaka Sample Project" readonly onItemsChanged={onItemsChanged} onItemCreated={onItemCreated} onItemDeleted={onItemDeleted}>
            <ProjectSection title="Outline" />
            <ProjectSection title="NPM Scripts" />
            <ProjectSection title="Bazel Build Targets" />
          </Monaka>
        </Container>
      </IconProvider>
    </LanguageProvider>
  );
};
