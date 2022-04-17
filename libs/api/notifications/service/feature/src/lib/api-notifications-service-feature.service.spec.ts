import { Test } from '@nestjs/testing';
import { CommandBus, QueryBus, EventBus } from '@nestjs/cqrs';
import { ApiNotificationsService } from './api-notifications-service-feature.service';
import { ModuleRef } from '@nestjs/core';

describe('ApiNotificationsService', () => {
  let service: ApiNotificationsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiNotificationsService, QueryBus, CommandBus, EventBus],
    }).compile();

    service = module.get(ApiNotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  //Start of Manually added testing
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', async () => {
    const creator = jest.spyOn(service,'sendToMail');
    const result = await service.sendToMail("emailFrom","emailTo","Subject","text");
    expect(creator).toBeCalled();
    expect(result).toBeUndefined();
  });

  it('should be defined', async () => {
    const creator = jest.spyOn(service,'requestCV');
    const result = await service.requestCV();
    expect(creator).toBeCalled();
    expect(result).toBeUndefined();
  });

  it('should be defined', async () => {
    const creator = jest.spyOn(service,'currentUser');
    const result = await service.currentUser();
    expect(creator).toBeCalled();
    expect(result).toBeInstanceOf(Array);
  });

  it('should be defined', async () => {
    const creator = jest.spyOn(service,'getNameFromID');
    const result = await service.getNameFromID("userID");
    expect(creator).toBeCalled();
    expect(result).toBe('T');
  });

  it('should be defined', async () => {
    const creator = jest.spyOn(service,'getEmailFromID');
    const result = await service.getEmailFromID("userID");
    expect(creator).toBeCalled();
    expect(result).toBe('madunathabo2@gmail.com');
  });

  it('should be defined', async () => {
    const creator = jest.spyOn(service,'emailToUser');
    const result = await service.emailToUser();
    expect(creator).toBeCalled();
    expect(result).toBeInstanceOf(Array);
  });
});
