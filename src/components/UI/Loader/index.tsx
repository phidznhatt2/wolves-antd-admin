import React from "react";
import classNames from "classnames";
import styles from "./Loader.module.scss";

interface LoaderProps {
  spinning: boolean;
  fullScreen?: boolean;
  size?: number;
  text?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  spinning = false,
  fullScreen,
  size = 40,
  text = true,
}) => {
  return (
    <div
      className={classNames(styles.loader, {
        [styles.hidden]: !spinning,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.warpper}>
        <div className={styles.inner} style={{ width: size, height: size }} />
        {text && <div className={styles.text}>LOADING</div>}
      </div>
    </div>
  );
};

export default Loader;
