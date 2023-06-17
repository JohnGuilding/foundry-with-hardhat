import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {
  async function deployCounterFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter, owner, otherAccount };
  }

  it("Should increment Counter", async function () {
    const { counter } = await loadFixture(deployCounterFixture);

    await counter.increment();

    expect(await counter.number()).to.equal(1);
  });

  it("Should set number", async function () {
    const { counter } = await loadFixture(deployCounterFixture);

    await counter.setNumber(42);

    expect(await counter.number()).to.equal(42);
  });
});
