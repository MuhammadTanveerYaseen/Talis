"use client"
import React, { useState } from "react";

const PlanForm = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: "",
    file: null,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { ...formData, plan: selectedPlan });
    setFormSubmitted(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Data:", paymentData);

    // Simulate payment process
    alert("Processing Payment...");
    setTimeout(() => {
      alert("Payment Successful!");
      setPaymentSubmitted(true);
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6">
      {!formSubmitted ? (
        <div>
          {selectedPlan ? (
            <form
              onSubmit={handleSubmit}
              className="p-4 border rounded-lg shadow-md space-y-4"
            >
              <h2 className="text-xl font-semibold">
                Selected Plan: {selectedPlan}
              </h2>

              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Requirements</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block mb-2 font-medium">Upload File</label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold border rounded-lg hover:shadow-md"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Basic", price: "$10/month" },
                { name: "Standard", price: "$20/month" },
                { name: "Premium", price: "$30/month" },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="p-4 space-y-2 text-center border rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p>{plan.price}</p>
                  <button
                    onClick={() => handlePlanSelect(plan.name)}
                    className="w-full mt-4 px-4 py-2 font-semibold border rounded-lg hover:shadow-md"
                  >
                    Select {plan.name}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : !paymentSubmitted ? (
        <form
          onSubmit={handlePaymentSubmit}
          className="p-4 border rounded-lg shadow-md space-y-4"
        >
          <h2 className="text-xl font-semibold">Payment Details</h2>

          <div>
            <label className="block mb-2 font-medium">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handlePaymentChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={paymentData.expiryDate}
              onChange={handlePaymentChange}
              className="w-full p-2 border rounded-lg"
              placeholder="MM/YY"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">CVV</label>
            <input
              type="text"
              name="cvv"
              value={paymentData.cvv}
              onChange={handlePaymentChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 font-semibold border rounded-lg hover:shadow-md"
            >
              Pay Now
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Thank you!</h2>
          <p className="mt-2">
            Your Requirements has been submitted and payment was successful.
          </p>
        </div>
      )}
    </div>
  );
};

export default PlanForm;
