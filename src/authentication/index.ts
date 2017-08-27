import { Application } from "express";
import { initialize as passportInit, session as passportSession, use as passportUse, authenticate, serializeUser, deserializeUser } from 'passport';
import { BasicStrategy } from 'passport-http';
import * as expressSession from 'express-session';

export class Authentication {
    public static Configure(app: Application) {

        app.use(expressSession({ secret: 'alma' }));
        app.use(passportInit());
        app.use(passportSession());

        app.use(authenticate("basic"));

        serializeUser(function(user: {id: number}, done) {
            done(null, user.id);
        });
        
        
        deserializeUser(function(id, done) {

            done(null, {name: 'alma', id: id})
        });

        passportUse(new BasicStrategy(function (username, password, done) {
            password = "";
            return done(null, { User: username });
        }));
    }
}