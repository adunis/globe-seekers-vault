Based on the provided `draw-steel-elements` plugin files and the Steel Compendium SDK, here is a comprehensive YAML template for a "Montage Test". This template is designed to be used within a `ds-ability` code block in Obsidian.

```yaml
# -------------------
# MONTAGE TEST TEMPLATE
# -------------------
# This template is for creating a Montage Test, which is a type of ability
# that involves a series of checks to achieve a larger goal.
# Replace the placeholder text with your specific details for the montage.
# This structure is based on the 'Ability' and 'TestEffect' models found in the Steel Compendium SDK.

# (Required) The name of the montage test. This will be the main title.
name: Montage Test Name

# (Required) The type of action this montage represents (e.g., Action, Maneuver, Out of Combat).
type: Action

# (Optional) A brief, italicized flavor text description that sets the scene for the montage.
flavor: "A series of quick cuts showing intense training, a desperate escape, or careful preparation."

# (Optional) The cost to initiate the montage, if any (e.g., "1 Fortune", "Requires rare components").
cost: Montage Cost (if any)

# (Optional) Keywords associated with the ability (e.g., ["Exploration", "Social"]).
keywords:
  - Keyword1
  - Keyword2

# (Optional) The distance or range relevant to the montage's actions.
distance: Relevant Distance

# (Optional) The target of the montage's overall goal.
target: Overall Goal or Target

# (Optional) Any specific conditions that trigger the start of this montage.
trigger: Triggering Event (if any)

# (Required) The list of effects that occur as part of this ability. For a montage,
# this will typically be a single test effect describing the tiers of success.
effects:
  # This section defines the test itself.
  - name: The Montage Test
    # (Optional) A specific cost associated with undertaking the test within the montage.
    cost: Optional Test Cost
    # A description of what the test is for, including the roll to be made.
    effect: "Describe the goal of the montage and what the characters are trying to accomplish. This is a [Difficulty] Montage Test (Power Roll + [Characteristic])."
    # Result for Tier 1 success (e.g., a roll of 11 or lower).
    t1: "On a result of 11 or lower, the characters make some progress but face a significant setback or complication."
    # Result for Tier 2 success (e.g., a roll of 12-16).
    t2: "On a result of 12-16, the characters successfully accomplish their goal as intended."
    # Result for Tier 3 success (e.g., a roll of 17 or higher).
    t3: "On a result of 17 or higher, the characters excel, achieving their goal with an additional advantage or unforeseen benefit."
    # (Optional) Result for a critical success (e.g., Natural 19-20).
    crit: "On a critical success, the characters achieve a masterful breakthrough, fundamentally changing their situation for the better."
```


