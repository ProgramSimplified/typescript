declare namespace umdLib {
    const version: string;
    function doSometing(): void;
}

export as namespace umdLib // 专为 umd 库设置的语句, umd 库该条语句不可缺少

export = umdLib
