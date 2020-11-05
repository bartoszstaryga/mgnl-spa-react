import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

function Basic(props) {
  const { main, metadata } = props;

  return <div>{main && <EditableArea content={main} parentTemplateId={metadata['mgnl:template']} />}</div>;
}

export default Basic;
