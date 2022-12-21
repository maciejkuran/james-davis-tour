import { createContext, useState } from 'react';

export const TooltipContext = createContext({
  activeTooltip: '',
  onShowTooltip: '',
  onHideTooltip: '',
});

const TooltipContextProvider = props => {
  const [activeTooltip, setActiveTooltip] = useState(false);

  const showTooltipHandler = (tooltip, hoverBtn) => {
    setActiveTooltip(true);
    const coords = hoverBtn.getBoundingClientRect();
    const top = coords.top + 30 + 'px';
    const left = coords.left + 'px';
    tooltip.style.top = top;
    tooltip.style.left = left;
  };

  const hideTooltipHandler = () => {
    setActiveTooltip(false);
  };

  return (
    <TooltipContext.Provider
      value={{
        activeTooltip: activeTooltip,
        onShowTooltip: showTooltipHandler,
        onHideTooltip: hideTooltipHandler,
      }}
    >
      {props.children}
    </TooltipContext.Provider>
  );
};

export default TooltipContextProvider;
