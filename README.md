## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 16.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Set up your environment variables manually by following the instructions in the [tutorial](https://platform.openai.com/docs/quickstart)

   **OR**

   Set up your environment variables automatically by following the instructions below:

   1. Make a copy of the example environment variables file

      On Linux systems:

      ```bash
      $ cp .env.example .env
      ```

      On Windows:

      ```powershell
      $ copy .env.example .env
      ```

   2. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

6. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://platform.openai.com/docs/quickstart).
