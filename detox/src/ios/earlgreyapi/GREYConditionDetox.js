/**

	This code is generated.
	For more information see generation/README.md.
*/



class GREYCondition {
  static detoxConditionForElementMatched(interaction) {
    if (typeof interaction !== "object" || interaction.type !== "Invocation" || typeof interaction.value !== "object" || typeof interaction.value.target !== "object") {
      throw new Error('interaction should be a GREYElementInteraction, but got ' + JSON.stringify(interaction));
    }

    return {
      target: {
        type: "Class",
        value: "GREYCondition"
      },
      method: "detoxConditionForElementMatched:",
      args: [{
        type: "GREYElementInteraction*",
        value: interaction
      }]
    };
  }

  static detoxConditionForNotElementMatched(interaction) {
    if (typeof interaction !== "object" || interaction.type !== "Invocation" || typeof interaction.value !== "object" || typeof interaction.value.target !== "object") {
      throw new Error('interaction should be a GREYElementInteraction, but got ' + JSON.stringify(interaction));
    }

    return {
      target: {
        type: "Class",
        value: "GREYCondition"
      },
      method: "detoxConditionForNotElementMatched:",
      args: [{
        type: "GREYElementInteraction*",
        value: interaction
      }]
    };
  }

}

module.exports = GREYCondition;