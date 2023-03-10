# ipp5-web-browser

~~~~~ sh
npm install e53e04ac/ipp5-web-browser
~~~~~

~~~~~ mjs
import { Ipp5WebBrowser } from 'ipp5-web-browser';
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
    C_0(["e53e04ac/event-emitter\ndb90659b1c25a4e17e8a8dbf8920a630fd30321d"]);
    C_1(["e53e04ac/hold\n472cfb85bada328cba9c6faddcf45b1241761027"]);
    C_4(["e53e04ac/file-entry\n4ff5464c0df35db0fc552346c4011d115ebb4cde"]);
  end;
  subgraph "npmjs";
    C_2(["playwright\n1.31.2"]);
    C_3(["@types/node\n18.14.6"]);
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
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/db90659b1c25a4e17e8a8dbf8920a630fd30321d";
  click C_1 "https://github.com/e53e04ac/hold/tree/472cfb85bada328cba9c6faddcf45b1241761027";
  click C_2 "https://www.npmjs.com/package/playwright/v/1.31.2";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.6";
  click C_4 "https://github.com/e53e04ac/file-entry/tree/4ff5464c0df35db0fc552346c4011d115ebb4cde";
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
    I_0_0(["BrowserContext"]);
    I_0_1(["Page"]);
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
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace Tracer"]);
    E_1(["type Tracer"]);
    E_2(["const Tracer"]);
  end;
  M["tracer.d.ts"]
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
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
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
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
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
  subgraph "tracer.mjs";
    I_3_0(["Tracer"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  M ----> I_3_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["Tracer"]);
  end;
  M["tracer.mjs"]
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  M ----> I_0_0;
  E_0 ----> M;
~~~~~
