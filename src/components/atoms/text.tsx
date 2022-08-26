import React from 'react';

type Props = {
  label: string;
};

export const Text: React.FC<Props> = ({ label }) => {
  return (
    <span className="nes-text is-primary">{label}</span>
    // <div>
    //   <span className="nes-text is-primary">Primary</span>
    //   <span className="nes-text is-success">Success</span>
    //   <span className="nes-text is-warning">Warning</span>
    //   <span className="nes-text is-error">Error</span>
    //   <span className="nes-text is-disabled">Disabled</span>
    // </div>
  );
};
