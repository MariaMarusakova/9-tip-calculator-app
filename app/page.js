'use client'

import Image from "next/image";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

export default function Home() {

  const { control, register, onChange, getValues, watch, handleSubmit, formState, reset } = useForm();
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const enteredValues = watch();

  const submitWithPercent = (e) => {
    e.preventDefault();
    console.log("----------------------------------------------");
    console.log("----------------------------------------------");
    const billAmount = enteredValues.bill;
    const numberOfPeopleEntered = enteredValues.numberOfPeople;
    const enteredPercentage = enteredValues.customValue;
    const percentage = (enteredPercentage==null) ? e.target.id : enteredPercentage;
    const calulatedTip = Number(billAmount) * Number(percentage / 100);
    const calulatedTipPerPerson = calulatedTip / numberOfPeopleEntered;
    const calculatedFullBill = Number(calulatedTip) + Number(billAmount);
    const billPerPerson = calculatedFullBill / Number(numberOfPeopleEntered);
    if  (numberOfPeopleEntered!=0 && percentage!=0 && billAmount!=0) {
      setTotal(billPerPerson.toFixed(2));      
      setTip(calulatedTipPerPerson.toFixed(2));} else {
      setTotal(0);
      setTip(0);}
  
    console.log("billAmount: ", billAmount);
    console.log("numberOfPeopleEntered: ", numberOfPeopleEntered);
    console.log("percentage: ", enteredPercentage);
    console.log("calulatedTip: ", calulatedTip);
    console.log("calulatedTipPerPerson: ", calulatedTipPerPerson);
    console.log("calculatedFullBill: ", calculatedFullBill);
    console.log("billPerPerson: ", billPerPerson);
    console.log("----------------------------------------------");
    console.log("----------------------------------------------");
  }

  return (
    <main className="flex flex-col items-center justify-between">

      <div className="relative flex place-items-center mt-28 mb-20">
        <Image
          className=""
          src="/logo.svg"
          alt="Splitter Logo"
          width={80}
          height={36}
          priority
        />
      </div>

      <div className="bg-white w-[90%] h-max md:w-1/2 md:h-[30rem] place-self-center rounded-3xl md:flex">
        <form noValidate>

          <div className="m-3 p-5 md:w-[420px] md:m-5 md:p-10">

            <div className="mb-10">
              <label className="text-dark-grayish-cyan mb-5">Bill</label>
              <div className="relative  mt-2">
                <input className="flex h-10 w-full rounded-md px-4 py-1.5 text-sm md:text-lg ring-offset-background bg-very-light-grayish-cyan focus-visible:border-2 
                focus-visible:outline-none focus-visible:border-strong-cyan focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-2 md:mr-5 md:mb-1 
                text-right"
                  {...register("bill")} placeholder="0"></input>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17"><path fill="#9EBBBD" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" /></svg>                </div>
              </div>

            </div>

            <div>
              <h3 className="text-dark-grayish-cyan mb-5">Select Tip %</h3>
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 mb-10">
                <button className="md:w-28 h-10 bg-very-dark-cyan text-very-light-grayish-cyan rounded-lg text-2xl hover:bg-strong-cyan hover:text-dark-grayish-cyan " id="5" onClick={(e) => { submitWithPercent(e) }} >5%</button>
                <button className="md:w-28 h-10 bg-very-dark-cyan text-very-light-grayish-cyan rounded-lg text-2xl hover:bg-strong-cyan hover:text-dark-grayish-cyan" id="10" onClick={(e) => submitWithPercent(e)}>10%</button>
                <button className="md:w-28 h-10 bg-very-dark-cyan text-very-light-grayish-cyan rounded-lg text-2xl hover:bg-strong-cyan hover:text-dark-grayish-cyan" id="15" onClick={(e) => submitWithPercent(e)}>15%</button>
                <button className="md:w-28 h-10 bg-very-dark-cyan text-very-light-grayish-cyan rounded-lg text-2xl hover:bg-strong-cyan hover:text-dark-grayish-cyan" id="25" onClick={(e) => submitWithPercent(e)}>25%</button>
                <button className="md:w-28 h-10 bg-very-dark-cyan text-very-light-grayish-cyan rounded-lg text-2xl hover:bg-strong-cyan hover:text-dark-grayish-cyan" id="50" onClick={(e) => submitWithPercent(e)}>50%</button>
                <input className="md:w-28 h-10 bg-very-dark-cyan text-very-light-grayish-cyan rounded-lg text-xl text-center" placeholder={"Custom"} 
                name="customValue" {...register("customValue", { onChange: (e) => submitWithPercent(e) })}></input>
              </div>
            </div>

            <div>
              <label className="text-dark-grayish-cyan mb-5">Number of People</label>
              <div className="relative mt-2">
                <input className="flex h-10 w-full rounded-md px-4 py-1.5 text-sm md:text-lg ring-offset-background bg-very-light-grayish-cyan focus-visible:border-2 
                focus-visible:outline-none focus-visible:border-strong-cyan focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-2 md:mr-5 md:mb-1 
                text-right"
                  {...register("numberOfPeople")} placeholder="0"></input>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z" /></svg>
                </div>
              </div>

            </div>

          </div>
        </form>

        <div className="bg-very-dark-cyan md:w-[420px] md:m-10 rounded-3xl p-10">
          <div>
          <div className="flex mb-9">    
            <div className="w-36">
            <p className="text-sm text-white">Tip Amount</p>
            <p className="text-xs text-grayish-cyan">/ person</p>
            </div>    
            <div className="text-4xl text-strong-cyan text-right w-40 ml-28">
            <p >${tip}</p>
            </div>
          </div>

          <div className="flex mb-9">    
            <div className="w-36">
            <p className="text-sm text-white">Total</p>
            <p className="text-xs text-grayish-cyan">/ person</p>
            </div>    
            <div className="text-4xl text-strong-cyan text-right w-40 ml-28">
            <p >${total}</p>
            </div>
          </div>

          </div>
          <button className="md:w-[23rem] h-10 bg-strong-cyan text-very-dark-cyan rounded-lg text-2xl -ml-3 mt-32
                hover:bg-light-grayish-cyan" onClick={() => {reset();setTotal(0);setTip(0)}}>RESET</button>
        </div>

      </div>
    </main>
  );
}
