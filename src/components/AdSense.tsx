import React, { useEffect } from 'react';

interface AdSenseProps {
  client: string;
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export const AdSense: React.FC<AdSenseProps> = ({
  client,
  slot,
  format = 'auto',
  responsive = true,
  style = {},
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Error loading AdSense:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
};
