/* eslint-disable max-len */
const config = {
  gpu: {
    "3090":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "3080":
      "Format=2\nPowerLimit=70\nThermalLimit=\nCoreClkBoost=-150000\nVFCurve=\nMemClkBoost=850000\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "3070":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "3060 ti":
      "Format=2\nPowerLimit=65\nThermalLimit=\nCoreClkBoost=-400000\nVFCurve=\nMemClkBoost=1000000\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "3060":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "2080 ti":
      "Format=2\nPowerLimit=75\nThermalLimit=\nCoreClkBoost=-150000\nVFCurve=\nMemClkBoost=900000\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "2080 super":
      "Format=2\nPowerLimit=75\nThermalLimit=\nCoreClkBoost=-50000\nVFCurve=\nMemClkBoost=800000\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "2080":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "2070 super":
      "Format=2\nPowerLimit=75\nThermalLimit=\nCoreClkBoost=-50000\nVFCurve=\nMemClkBoost=700000\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "2070":
      "Format=2\nPowerLimit=75\nThermalLimit=\nCoreClkBoost=-50000\nVFCurve=\nMemClkBoost=700000\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "2060 super":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "2060":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "1660 ti":
      "Format=2\nPowerLimit=65\nThermalLimit=\nCoreClkBoost=-150000\nVFCurve=\nMemClkBoost=1000000\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "1660 super":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "1660":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "1080 ti":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "1080":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "1070 ti":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "1070":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
    "1060":
      "Format=2\nPowerLimit=\nThermalLimit=\nCoreClkBoost=\nVFCurve=\nMemClkBoost=\nFanMode=\nFanSpeed=\nFanMode2=\nFanSpeed2=\n",
  },
  mining: {
    coin: "eth",
    miner: "ethminer",
    wallet: "",
    password: "",
    pool: "ethash.poolbinance.com:1800",
    method: "stratum+tcp://",
  },
};

export default config;
