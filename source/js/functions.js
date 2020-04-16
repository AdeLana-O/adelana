"use strict";

export const darkMode = (theme, iconName, elemClass) => {
  const darkModeIcon = document.getElementById("dark-mode-icon");
  const icon = darkModeIcon.firstChild;

  darkModeIcon.className = theme;
  setTimeout(() => (icon.className = iconName), 300);
  document.documentElement.className = elemClass;
};

export const setCookie = (str) => {
  const expireDate = Date.now() + 365 * 24 * 60 * 60 * 1000;
  const d = new Date(expireDate);

  document.cookie = `theme=${str};expires=${d};path=/`;
};

export const getCookie = (str) => {
  const theme = document.cookie;
  const arr = theme.split("=");

  if (arr[0] === str && arr[1] === "dark") {
    darkMode("dark", "fas fa-moon", "dark-mode");
  }
};

const setInputError = (elem, msg) => {
  const errorMsgBox = document.querySelector(elem);
  errorMsgBox.previousElementSibling.classList.add("input-error");
  errorMsgBox.style.display = "inline-block";
  errorMsgBox.innerHTML = msg;
};

const removeInputError = (elem) => {
  const errorMsgBox = document.querySelector(elem);
  errorMsgBox.previousElementSibling.classList.remove("input-error");
  errorMsgBox.style.display = "none";
  errorMsgBox.innerHTML = "";
};

export const inputHasFocus = (e) => {
  const { target } = e;
  let elem;

  switch (target.id) {
    case "name":
      elem = ".name-error";
      break;
    case "email":
      elem = ".email-error";
      break;
    case "number":
      elem = ".number-error";
      break;
    case "message":
      elem = ".message-error";
  }

  removeInputError(elem);
};

export let nameErr, emailErr, numErr, msgErr;

export const validateName = () => {
  const name = document.getElementById("name");

  try {
    if (name.value === "") {
      nameErr = true;
      throw "Enter your name";
    }

    nameErr = false;
    removeInputError(".name-error");
    name.value.trim();
  } catch (err) {
    setInputError(".name-error", err);
  }
};

export const validateEmail = () => {
  const email = document.getElementById("email");
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  try {
    if (email.value === "") {
      emailErr = true;
      throw "Enter your e-mail";
    } else if (!regex.test(email.value)) {
      emailErr = true;
      throw "Enter a valid e-mail address";
    }

    emailErr = false;
    removeInputError(".email-error");
    email.value.trim();
  } catch (err) {
    setInputError(".email-error", err);
  }
};

export const validatePhoneNumber = () => {
  const num = document.getElementById("number");
  const regex = /[^\d\s\-]/;

  try {
    if (num.value === "") {
      numErr = false;
      removeInputError(".number-error");
      num.value.trim();
    } else {
      if (regex.test(num.value)) {
        numErr = true;
        throw "Phone number can only contain numbers, space and hyphen";
      }
    }

    numErr = false;
    removeInputError(".number-error");
    num.value.trim();
  } catch (err) {
    setInputError(".number-error", err);
  }
};

export const validateMessage = () => {
  const msg = document.getElementById("message");

  try {
    if (msg.value === "") {
      msgErr = true;
      throw "Enter a message";
    }
    msgErr = false;
    removeInputError(".message-error");
    msg.value.trim();
  } catch (err) {
    setInputError(".message-error", err);
  }
};
