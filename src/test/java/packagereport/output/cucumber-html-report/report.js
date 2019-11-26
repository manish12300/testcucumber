$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:packagereport/data1.feature");
formatter.feature({
  "name": "Eating fruits",
  "description": "this features explains about fruits",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Eating",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "There are \"\u003cstart\u003e\" fruits",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "type",
        "with"
      ]
    },
    {
      "cells": [
        "apples",
        "me"
      ]
    },
    {
      "cells": [
        "mango",
        "john"
      ]
    },
    {
      "cells": [
        "orange",
        "mohan"
      ]
    }
  ]
});
formatter.step({
  "name": "I eat \"\u003ceat\u003e\" fruits",
  "keyword": "When "
});
formatter.step({
  "name": "I have \"\u003cleft\u003e\" fruits",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "start",
        "eat",
        "left"
      ]
    },
    {
      "cells": [
        "12",
        "5",
        "7"
      ]
    },
    {
      "cells": [
        "10",
        "6",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Eating",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "There are \"12\" fruits",
  "rows": [
    {
      "cells": [
        "type",
        "with"
      ]
    },
    {
      "cells": [
        "apples",
        "me"
      ]
    },
    {
      "cells": [
        "mango",
        "john"
      ]
    },
    {
      "cells": [
        "orange",
        "mohan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "datatablereport.fruits(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I eat \"5\" fruits",
  "keyword": "When "
});
formatter.match({
  "location": "datatablereport.whenieat(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have \"7\" fruits",
  "keyword": "Then "
});
formatter.match({
  "location": "datatablereport.heworks(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Eating",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "There are \"10\" fruits",
  "rows": [
    {
      "cells": [
        "type",
        "with"
      ]
    },
    {
      "cells": [
        "apples",
        "me"
      ]
    },
    {
      "cells": [
        "mango",
        "john"
      ]
    },
    {
      "cells": [
        "orange",
        "mohan"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "datatablereport.fruits(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I eat \"6\" fruits",
  "keyword": "When "
});
formatter.match({
  "location": "datatablereport.whenieat(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have \"4\" fruits",
  "keyword": "Then "
});
formatter.match({
  "location": "datatablereport.heworks(String)"
});
formatter.result({
  "status": "passed"
});
});