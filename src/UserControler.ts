// import { Controller, Post, Get, Param, Body, Delete, Patch, ParseIntPipe } from '@nestjs/common';

// @Controller('user') // All routes will start with /user
// export class UserController {

//   // GET /user
//   @Get()
//   getUser() {
//     return {
//       name: 'asdkasd',
//       email: 'sdskdsakdlasd'
//     };
//   }

//   // POST /user
//   @Post()
//   store(@Body() body: any) {
//     console.log('Received body:', body);
//     return {
//       message: 'User created',
//       data: body,
//     };
//   }

//   // PATCH /user/:userId
//   @Patch(':userId')
//   update(@Param('userId', ParseIntPipe) userId: number, @Body() body: any) {
//     return {
//       message: 'User updated',
//       userId,
//       data: body,
//     };
//   }

//   // GET /user/:userId
//   @Get(':userId')
//   getUserID(@Param('userId', ParseIntPipe) userId: number) {
//     return {
//       message: 'User found',
//       userId,
//     };
//   }

//   // DELETE /user/:userId
//   @Delete(':userId')
//   deleteUser(@Param('userId', ParseIntPipe) userId: number) {
//     return {
//       message: 'User deleted',
//       userId,
//     };
//   }
// }
