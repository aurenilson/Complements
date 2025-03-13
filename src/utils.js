export class Utils {
    constructor() {
        return this;
    }
    controllers() {
        return {};
    }
    masks() {
        return {};
    }
    objects() {
        return {};
    }
    validates() {
        return {};
    }
    dates() {
        return {};
    }
    links() {
        return {
            breadcrumb(value) {
                if (!Array.isArray(value)) return;
                const breadcrumb_ = [];
                value.forEach((item) => {
                    if (item.url && item.name) {
                        breadcrumb_.push(
                            `<a href="${item.url}">${item.name}</a>`
                        );
                    }
                });
                return (
                    '<section style="display: flex; align-items: center; gap: 5px; font-size: 15px; text-transform: capitalize;">' +
                    breadcrumb_.join(
                        ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 20px"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> '
                    ) +
                    "</section>"
                );
            },
            searchParams(param, decode = false, url = window.location.href) {
                if (url.indexOf("?") == -1) return "";
                return (
                    decode ? new URL(decodeURI(url)) : new URL(url)
                ).searchParams.get(param);
            },
            serialize(value, prefix = false) {
                if (!value instanceof Object) return "";
                return prefix
                    ? "?"
                    : "" +
                          Object.keys(value)
                              .map((item) => {
                                  return (
                                      encodeURIComponent(item) +
                                      "=" +
                                      encodeURIComponent(value[item])
                                  );
                              })
                              .join("&");
            },
        };
    }
    strings() {
        return {
            captalizeWord: (value) => {
                return value
                    ? (value.charAt(0).toUpperCase() + value.slice(1)).trim()
                    : "";
            },
            captalizePhrase: (value) => {
                return value
                    ? value
                          .trim()
                          .toLowerCase()
                          .split(" ")
                          .map((item) =>
                              item.length > 2
                                  ? item[0].toUpperCase() + item.substring(1)
                                  : item
                          )
                          .join(" ")
                    : "";
            },
            upperCase: (value) => {
                return value ? value.toUpperCase() : "";
            },
            lowerCase: (value) => {
                return value ? value.toLowerCase() : "";
            },
            removeNumbers: (value) => {
                return value ? value.replace(/[0-9]/g, "").trim() : "";
            },
            removeCaracteres: (value) => {
                return value ? value.toString().replace(/\D+/g, "") : "";
            },
            removeSpecialCaracters: (value) => {
                return value
                    ? value
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .trim()
                    : "";
            },
            removeHTMLTags: (value) => {
                function htmlDecode(input) {
                    var doc = new DOMParser().parseFromString(
                        input,
                        "text/html"
                    );
                    return doc.documentElement.textContent;
                }

                return value
                    ? htmlDecode(
                          value
                              .replace(/<[^>]*>/g, "")
                              .replace(/(\r\n|\n|\r)/gm, "")
                      )
                    : "";
            },
        };
    }
}
