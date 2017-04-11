# Reproduction steps for ESLint v4 + babel-eslint bug

1. Clone and `npm install`.
2. Run `npm test` from `master` branch.
    - Observe the error.

3. Go to `eslint_v4_with_fix` branch, run `npm install` and `npm test`.
    - Observe that the bug is gone.

4. Go to `eslint_v3_with_fix` branch, run `npm install` and `npm test`.
    - Observe that there are no regressions.

5. Profit!
