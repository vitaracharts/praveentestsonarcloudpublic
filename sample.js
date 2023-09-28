const rootEl1 = document.getElementById("root");
              const queryParams = new URLSearchParams(document.location.search);
              const input = queryParams.get("input");
              rootEl1.innerHTML = input; // Noncompliant