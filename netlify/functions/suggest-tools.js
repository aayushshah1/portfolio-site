exports.handler = async (event) => {
  const query = (event.queryStringParameters.query || "").toLowerCase();

  const toolMap = {
    "sip": {
      toolName: "SIP Calculator",
      url: "https://anupamwealth.com/Calculator/Sipcalculator"
    },
    "retirement": {
      toolName: "Retirement Planner",
      url: "https://anupamwealth.com/Calculator/RetirementPlanner"
    },
    "education": {
      toolName: "Child Education Planner",
      url: "https://anupamwealth.com/Calculator/ChildEducationPlanner"
    },
    "goal": {
      toolName: "Goal Based Planner",
      url: "https://anupamwealth.com/Calculator/GoalPlanner"
    },
    "comparison": {
      toolName: "SIP Comparison",
      url: "https://anupamwealth.com/Calculator/SIPComparison"
    },
    "delay": {
      toolName: "SIP Delay Calculator",
      url: "https://anupamwealth.com/Calculator/SIPDelayCalculator"
    },
    "swp": {
      toolName: "SWP Performance Chart",
      url: "https://anupamwealth.com/Calculator/SWPPerformanceChart"
    },
    "fd": {
      toolName: "Fixed Deposit Calculator",
      url: "https://anupamwealth.com/Calculator/FDCalculator"
    },
    "mutual fund": {
      toolName: "Mutual Fund Returns Calculator",
      url: "https://anupamwealth.com/MutualFund/FundSnapShotDetails?FundID=NDk5"
    },
    "investments": {
      toolName: "Mutual Fund Returns Calculator",
      url: "https://anupamwealth.com/MutualFund/FundSnapShotDetails?FundID=NDk5"
    }
  };

  if (toolMap[query]) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toolMap[query])
    };
  }

  return {
    statusCode: 404,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ error: "Tool not found" })
  };
};

