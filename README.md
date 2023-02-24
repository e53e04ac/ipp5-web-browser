# ipp5-web-browser

~~~~~ sh
npm install e53e04ac/ipp5-web-browser
~~~~~

~~~~~ mjs
import { Ipp5WebBrowser } from 'e53e04ac/ipp5-web-browser';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["event-emitter"]);
    B_1(["hold"]);
    B_2(["playwright"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
    B_4(["file-entry"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/event-emitter\n98fd492f5a6e31cd646d4b79e70035061165871f"]);
    C_1(["e53e04ac/hold\n6845a848f97733b8cd8a34bfc03c3bf040818aa8"]);
    C_4(["e53e04ac/file-entry\na15e61ae257f72be757cce2018bc2e2a6ff1962f"]);
  end;
  subgraph "npmjs";
    C_2(["playwright\n1.31.1"]);
    C_3(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/98fd492f5a6e31cd646d4b79e70035061165871f";
  click C_1 "https://github.com/e53e04ac/hold/tree/6845a848f97733b8cd8a34bfc03c3bf040818aa8";
  click C_2 "https://www.npmjs.com/package/playwright/v/1.31.1";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click C_4 "https://github.com/e53e04ac/file-entry/tree/a15e61ae257f72be757cce2018bc2e2a6ff1962f";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-web-browser";
    E_0(["Ipp5WebBrowser"]);
  end;
  M["index.mjs"]
  subgraph "playwright";
    I_0_0(["default"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["hold"]);
    I_2_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-web-browser";
    E_0(["namespace Ipp5WebBrowser"]);
    E_1(["type Ipp5WebBrowser"]);
    E_2(["const Ipp5WebBrowser"]);
  end;
  M["index.d.ts"]
  subgraph "playwright";
    I_0_0(["Browser"]);
    I_0_1(["BrowserContext"]);
    I_0_2(["BrowserType"]);
    I_0_3(["ElementHandle"]);
    I_0_4(["Frame"]);
    I_0_5(["Page"]);
    I_0_6(["Request"]);
    I_0_7(["Response"]);
    I_0_8(["Video"]);
    I_0_9(["Worker"]);
  end;
  subgraph "file-entry";
    I_1_0(["FileEntry"]);
  end;
  subgraph "event-emitter";
    I_2_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_3_0(["Get"]);
    I_3_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_0_2;
  M ----> I_0_3;
  M ----> I_0_4;
  M ----> I_0_5;
  M ----> I_0_6;
  M ----> I_0_7;
  M ----> I_0_8;
  M ----> I_0_9;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
