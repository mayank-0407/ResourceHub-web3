function sendkeyToServer(key) {
  serializedData = {
    key: key,
  };
  console.log(serializedData);

  $.ajax({
    type: "GET",
    url: "./add",
    data: serializedData,
    success: function (response) {
      console.log("Logged In Successfully");
      location.reload();
    },
    error: function (response) {
      location.reload();
      alert(response["responseJSON"]["error"]);
    },
  });
}

const connectWallet = async () => {
  var thisaccount;
  try {
    if (!window.ethereum) return alert("Please install MetaMask.");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    thisaccount = accounts[0];
    sendkeyToServer(thisaccount);
  } catch (error) {
    console.log(error);

    throw new Error("No ethereum object");
  }
};
connect_wallet.addEventListener("click", connectWallet);

// const sendBasicTransaction = async () => {
//   const parsedAmount = ethers.parseEther(amount);

//   await ethereum.request({
//     method: "eth_sendTransaction",
//     params: [
//       {
//         from: currentAccount,
//         to: addressTo,
//         gas: "0x5208",
//         value: parsedAmount.toString(16),
//       },
//     ],
//   });
// };
