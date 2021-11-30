async function main(network) {
    let weth; 
    const FACTORY_ADDRESS = "0x24ab5a7EDcB7fa22c1853BCE2FD304F9aDa5a303";

    if(network === "bsc") {
        weth = await WETH.at("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") 
    } else if(network === "testnet") {
        weth = await WETH.at("0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd")
    } else {
        const WETH = await ethers.getContractFactory('WETH');
        weth = await WETH.deploy();
    }

    const BorealisswapRouter02 = await ethers.getContractFactory("BorealisswapRouter02")
    const borealisswapRouter02 = await BorealisswapRouter02.deploy(FACTORY_ADDRESS, weth.address)

    await borealisswapRouter02.deployed();

    console.log(`Borealis Router 02 deployed to :  ${borealisswapRouter02.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });