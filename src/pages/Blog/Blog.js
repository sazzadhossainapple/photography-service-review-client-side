import React from "react";

import TitleLine from "../../asserts/images/titleLine.webp";

const Blog = () => {
  return (
    <div className="lg:px-20 md:px-12 sm:px-8 px-6 lg:py-16 md:py-12 sm:py-8 py-8">
      <div className="flex text-center justify-center flex-col mb-10">
        <h1 className="text-2xl font-medium">Questions & Answers</h1>
        <div>
          <img className="inline-block my-2" src={TitleLine} alt="" />

          <h2 className="font-text1 text-2xl">
            some read questions and answer
          </h2>
        </div>
      </div>

      <div className="mt-10 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8">
        <div className="">
          <h1 className="text-2xl mb-3 ">Difference between SQL and NoSQL?</h1>
          <p className="text-gray-700 leading-8">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
          <p className="text-gray-700 leading-8 mt-4">
            JS is basically used on the client side. Node Js is mostly used on
            the server side. Javascript is capable enough to add HTML and play
            with the DOM. Nodejs does not have the capability to add HTML tags.
            Javascript can run in any browser engine like JS core in safari and
            Spidermonkey in Firefox. V8 is the Javascript engine inside of
            node.js that parses and runs Javascript.
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl mb-3 ">
            What is the difference between javascript and NodeJS?
          </h1>
          <p className="text-gray-700 leading-8">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMS
            that is non-relational and generally does not use SQL. SQL these
            databases have fixed or static or predefined schema. NoSQL they have
            a dynamic schema. SQL these databases are best suited for complex
            queries. NoSQL these databases are not so good for complex
            queries.SQL Vertically Scalable. NoSQL is Horizontally scalable.
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl mb-3 ">What is JWT, and how does it work?</h1>
          <p className="text-gray-700 leading-8">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON objects. It is
            compact, readable, and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP).
          </p>
          <p className="text-gray-700 leading-8 my-4">
            Basically, the identity provider(IdP) generates a JWT certifying
            user identity and the Resource server decodes and verifies the
            authenticity of the token using secret salt / public key.
          </p>

          <ol>
            <li className="mb-3">
              1. User sign-in using username and password or google/facebook.
            </li>
            <li className="mb-3">
              2. Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key.
            </li>
            <li className="mb-3">
              3. User's Client uses the JWT to access protected resources by
              passing the JWT in HTTP Authorization header.
            </li>
            <li className="mb-3">
              4. Resource server then verifies the authenticity of the token
              using the secret salt/ public key.
            </li>
          </ol>
        </div>
        <div className="">
          <h1 className="text-2xl mb-3 ">
            How does NodeJS handle multiple requests at the same time?
          </h1>
          <p className="text-gray-700 leading-8">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would process the request and sends the
            response back to the client by itself. But, it is possible to
            process multiple requests parallelly using the NodeJS cluster module
            or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
