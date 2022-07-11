import React from 'react'
import ButtonBase from "@mui/material/ButtonBase";

function WhiteButton({ children }) {
  return (
    <ButtonBase
        sx={{
          height: 50,
          width: 170,
          borderRadius: "40px",
          backgroundColor: "#fff",
          color: "#000",
          fontSize: "1.6rem",
          fontWeight: "700"
        }}
      >
        {children}
      </ButtonBase>
  )
}

export default WhiteButton