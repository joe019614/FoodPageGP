import { React, useState, useRef } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Popup from "reactjs-popup";
import styles from "./WheelPart.module.css";

const defaultFoodList = [
  { option: "Chinese" },
  { option: "Japanese" },
  { option: "American" },
  { option: "Indian" },
  { option: "Italian" },
  { option: "Mexican" },
  { option: "Spanish" },
];

export default function WheelPart() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [foodOptions, setFoodOptions] = useState([...defaultFoodList]);
  const [tempFoodOptions, setTempFoodOptions] = useState([...defaultFoodList]);
  const popupRef = useRef();

  const handleOptionAdd = () => {
    setTempFoodOptions([...tempFoodOptions, { option: "" }]);
  };

  const handleOptionRemove = (index) => {
    const list = [...tempFoodOptions];
    list.splice(index, 1);
    setTempFoodOptions(list);
    console.log(list);
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * tempFoodOptions.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleTempOptionChange = (event, index) => {
    const { value } = event.target;
    setTempFoodOptions((prevTempFoodOptions) => {
      const updatedOptions = [...prevTempFoodOptions];
      updatedOptions[index] = { option: value };
      return updatedOptions;
    });
  };

  const handleApplyClick = () => {
    setFoodOptions(tempFoodOptions);
    popupRef.current.close();
  };

  console.log(foodOptions);

  return (
    <>
      <div className={styles["wheel-container"]}>
        <div className={styles["left-grid"]}>
          <h1>WHAT TO EAT TODAY?</h1>
          <p>Let us decide for you!</p>

          <Popup
            ref={popupRef}
            trigger={
              <Button variant="outlined" className={styles.button}>
                {" "}
                Edit Options{" "}
              </Button>
            }
            modal
            nested
          >
            {(close) => (
              <div className={styles.modal}>
                <CloseIcon
                  className={styles.close}
                  onClick={close}
                  style={{ width: "28px" }}
                ></CloseIcon>
                <div className={styles.header}> Cuisine Options </div>

                <form className={styles.foodOptions} autoComplete="off">
                  <div className={styles["form-field"]}>
                    {tempFoodOptions.map((foodOption, index) => (
                      <div key={index} className={styles.options}>
                        <div className={styles["add-section"]}>
                          <TextField
                            variant="outlined"
                            name="option"
                            type="text"
                            id="option"
                            value={foodOption.option}
                            onChange={(e) => handleTempOptionChange(e, index)}
                            required
                          />

                          <div
                            className={styles["remove-section"]}
                            style={{
                              display: "inline-block",
                            }}
                          >
                            {tempFoodOptions.length > 1 && (
                              <Button onClick={() => handleOptionRemove(index)}>
                                Remove
                              </Button>
                            )}
                          </div>
                          {tempFoodOptions.length - 1 === index &&
                            tempFoodOptions.length < 8 && (
                              <Button
                                type="button"
                                onClick={() => {
                                  handleOptionAdd();
                                }}
                                style={{ display: "block" }}
                              >
                                <div>Add an Option</div>
                              </Button>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </form>

                <div className={styles.actions}>
                  <Button onClick={handleApplyClick} variant="contained">
                    Apply
                  </Button>
                </div>
              </div>
            )}
          </Popup>
        </div>

        <div
          className={styles["right-grid"]}
          style={{ width: "100%", height: "800px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Wheel
              className={styles.wheel}
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={foodOptions}
              spinDuration={[0.4]}
              // outerBorderColor={["#A9A9A9"]}
              // outerBorderWidth={[10]}
              // innerBorderColor={["#D98641"]}
              // innerBorderWidth={[50]}
              radiusLineColor={["#dedede"]}
              radiusLineWidth={[10]}
              textColors={["#000000"]}
              fontSize={[15]}
              backgroundColors={["#FFFFFF"]}
              onStopSpinning={() => {
                setMustSpin(false);
              }}
            />

            <Button
              style={{
                borderRadius: "50%",
                border: "1px #000000 solid",
                backgroundColor: "#D98641",
                color: "#FFFFFF",
                width: "100px",
                height: "100px",
                minWidth: "unset",
                padding: 0,
                fontSize: "25px",
                fontWeight: "bold",
                zIndex: "999",
                fontFamily: "Playfair Display",
              }}
              variant="outlined"
              className={styles.spinButton}
              onClick={handleSpinClick}
            >
              SPIN
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

