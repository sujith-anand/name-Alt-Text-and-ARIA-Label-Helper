document.addEventListener('DOMContentLoaded', function () {
  const data = [
    {
      elementType: "image",
      purposes: [
        {
          type: "decorative",
          description: "The image is only decorative and doesn't provide meaningful information.",
          suggestion: "Use alt=\"\" or role=\"presentation\" to mark this image as decorative and hide it from assistive technologies.",
          example: "&lt;img src='decorative-image.jpg' alt='' /&gt;"
        },
        {
          type: "informative",
          description: "The image provides important information or context to the content.",
          suggestion: "Use a descriptive alt attribute that explains the content or message of the image.",
          example: "&lt;img src='informative-image.jpg' alt='Detailed description of the image' /&gt;"
        },
        {
          type: "functional",
          description: "The image serves a functional purpose, like a button or a link.",
          suggestion: "Use alt text that describes the action or function of the image (e.g., \"Save\" for a save icon button).",
          example: "&lt;img src='save-icon.jpg' alt='Save' /&gt;"
        }
      ]
    },
    {
      elementType: "icon",
      purposes: [
        {
          type: "decorative",
          description: "The icon is purely decorative and doesn’t convey any meaningful information.",
          suggestion: "Use aria-hidden=\"true\" to hide the icon from assistive technologies.",
          example: "&lt;i class='icon-decorative' aria-hidden='true'&gt;&lt;/i&gt;"
        },
        {
          type: "functional",
          description: "The icon represents an action or function, such as a save icon on a button.",
          suggestion: "Use an aria-label to describe the action of the icon (e.g., aria-label=\"Save\").",
          example: "&lt;button aria-label='Save'&gt;&lt;i class='icon-save'&gt;&lt;/i&gt;&lt;/button&gt;"
        }
      ]
    },
    {
      elementType: "button",
      purposes: [
        {
          type: "text",
          description: "The button has a visible text label that describes its function.",
          suggestion: "Ensure the button's text is descriptive (e.g., \"Submit\" or \"Cancel\") to clearly indicate the action.",
          example: "&lt;button&gt;Submit&lt;/button&gt;"
        },
        {
          type: "icon",
          description: "The button contains only an icon without visible text.",
          suggestion: "Use an aria-label to provide a text description of the action (e.g., aria-label=\"Save\").",
          example: "&lt;button aria-label='Save'&gt;&lt;i class='icon-save'&gt;&lt;/i&gt;&lt;/button&gt;"
        }
      ]
    },
    {
      elementType: "input",
      purposes: [
        {
          type: "label",
          description: "The input field requires a label to describe what information the user should provide.",
          suggestion: "Use an aria-label attribute or an associated <label> element to provide context for the input.",
          example: "&lt;input type='text' aria-label='First name' /&gt;"
        }
      ]
    },
    {
      elementType: "control",
      purposes: [
        {
          type: "enhance",
          description: "The interactive control needs additional context to guide the user’s interaction.",
          suggestion: "Use aria-label, aria-labelledby, or aria-describedby to provide accessible descriptions for interactive controls.",
          example: "&lt;div role='slider' aria-label='Volume control'&gt;&lt;/div&gt;"
        }
      ]
    }
  ];

  const elementType = document.getElementById('element-type');
  const purpose = document.getElementById('purpose');
  const suggestionOutput = document.getElementById('suggestion-output');

  // Populate purpose based on element type
  function updatePurposeOptions() {
    purpose.innerHTML = '';
    const selectedType = elementType.value;
    const selectedData = data.find(d => d.elementType === selectedType);
    
    selectedData.purposes.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.type;
      opt.textContent = option.description;
      purpose.appendChild(opt);
    });

    // Show suggestion for the first purpose by default
    showSuggestion();
  }

  // Display suggestion and example based on selected options
  function showSuggestion() {
    const selectedType = elementType.value;
    const selectedPurpose = purpose.value;
    const selectedData = data.find(d => d.elementType === selectedType);
    const suggestionData = selectedData.purposes.find(p => p.type === selectedPurpose);

    if (suggestionData) {
      suggestionOutput.innerHTML = `
        <p><strong>Suggestion:</strong> ${suggestionData.suggestion}</p>
        <p><strong>Example Code:</strong></p>
        <pre>${suggestionData.example}</pre>
      `;
    } else {
      suggestionOutput.textContent = 'No suggestion available.';
    }
  }

  // Event listeners
  elementType.addEventListener('change', () => {
    updatePurposeOptions();
  });

  purpose.addEventListener('change', showSuggestion);

  // Initial population of purpose options and suggestion display
  updatePurposeOptions();
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("documentLink").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default anchor click behavior
      chrome.tabs.create({ url: "https://docs.google.com/presentation/d/16yQmyhPr8ceHU1RMuCLRX_l052CtjBbcERx6FUuLJRU/edit?usp=sharing" });
  });
});
