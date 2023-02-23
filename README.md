# ipp5-web-browser

~~~~~ sh
npm install e53e04ac/ipp5-web-browser
~~~~~

~~~~~ mjs
import { Ipp5WebBrowser } from 'e53e04ac/ipp5-web-browser';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["e53e04ac/hold"]);
    B_2(["playwright"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
    B_4(["e53e04ac/file-entry"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/faf256d4d2350ffa0af1fed794236faa4f0740a1";
  click B_1 "https://github.com/e53e04ac/hold/tree/443c2e801bbe20409c761994a91fa88fb6044602";
  click B_2 "https://www.npmjs.com/package/playwright/v/1.31.1";
  click B_3 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click B_4 "https://github.com/e53e04ac/file-entry/tree/69045717124e824d6d83b98b6866fcafe8f295ef";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-web-browser";
    E_0(["Ipp5WebBrowser"]);
  end;
  M(["index.mjs"])
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
  M(["index.d.ts"])
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
