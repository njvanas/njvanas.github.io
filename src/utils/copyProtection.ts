/**
 * Copy protection utilities
 */

// Disable text selection
export const disableTextSelection = (): void => {
  document.addEventListener('selectstart', (e) => e.preventDefault());
  document.addEventListener('dragstart', (e) => e.preventDefault());
};

// Disable right-click context menu
export const disableContextMenu = (): void => {
  document.addEventListener('contextmenu', (e) => e.preventDefault());
};

// Disable common keyboard shortcuts for copying
export const disableKeyboardShortcuts = (): void => {
  document.addEventListener('keydown', (e) => {
    // Disable Ctrl+A (Select All)
    if (e.ctrlKey && e.key === 'a') {
      e.preventDefault();
    }
    
    // Disable Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
    }
    
    // Disable Ctrl+V (Paste)
    if (e.ctrlKey && e.key === 'v') {
      e.preventDefault();
    }
    
    // Disable Ctrl+X (Cut)
    if (e.ctrlKey && e.key === 'x') {
      e.preventDefault();
    }
    
    // Disable Ctrl+S (Save)
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
    }
    
    // Disable Ctrl+P (Print)
    if (e.ctrlKey && e.key === 'p') {
      e.preventDefault();
    }
    
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
      e.preventDefault();
    }
    
    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
    }
    
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  });
};

// Disable drag and drop
export const disableDragDrop = (): void => {
  document.addEventListener('dragover', (e) => e.preventDefault());
  document.addEventListener('drop', (e) => e.preventDefault());
};

// Initialize all copy protection measures
export const initializeCopyProtection = (): void => {
  disableTextSelection();
  disableContextMenu();
  disableKeyboardShortcuts();
  disableDragDrop();
  
  // Add CSS to prevent text selection
  const style = document.createElement('style');
  style.textContent = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
      -webkit-tap-highlight-color: transparent !important;
    }
    
    /* Allow selection only for input fields */
    input, textarea {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
    
    /* Disable image dragging */
    img {
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      pointer-events: none !important;
    }
  `;
  document.head.appendChild(style);
  
  console.clear();
  console.log('%c🔒 Content Protection Active', 'color: #ef4444; font-size: 16px; font-weight: bold;');
  console.log('%cThis content is protected by copyright. Unauthorized copying is prohibited.', 'color: #f59e0b; font-size: 12px;');
};