import { AuthService } from '@auth/auth.service';
import { Public } from '@auth/decorator/public.decorator';
import { LocalAuthGuard } from '@auth/guard/local-auth.guard';
import { Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { Request as Req } from 'express';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @Post('/auth/login')
    @Public()
    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    login(@Request() req: Req) {
        // After the request (constain username, password) is authenticated by LocalAuthGuard => generate JWT
        return this.authService.generateJwt(req.user);
    }
}
