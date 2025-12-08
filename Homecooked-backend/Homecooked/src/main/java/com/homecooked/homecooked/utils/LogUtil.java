package com.homecooked.homecooked.utils;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogUtil {

    public static Logger getLogger(Class<?> clazz) {
        return LoggerFactory.getLogger(clazz);
    }

    public static void info(Logger log, String message) {
        log.info("INFO → {}", message);
    }

    public static void warn(Logger log, String message) {
        log.warn("WARNING → {}", message);
    }

    public static void error(Logger log, String message) {
        log.error("ERROR → {}", message);
    }
}